import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { History } from "./History";

export const HistoryContainer = () => {
  const [req, api, width, notification] = [
    useHttp(),
    useAPI(),
    useWindowDimensions().width,
    useNotification(),
  ];
  const [data, setData] = useState<UserRecord>();
  const [loading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    notification.loading();
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      notification.cancel().error("You are not auth");
      setAuth(false);
      setLoading(false);
      return;
    }
    req<SignInDto, UserRecord>({
      url: api.signIn(),
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (!result.isExpected) {
          notification.cancel().error(result.message);
          setAuth(false);
          return;
        }
        notification.cancel();
        setData(result.value);
        setLoading(false);
      })
      .catch((error) => {
        notification.cancel().error("Something wrong with internet");
        setAuth(false);
      });
  }, []);

  if (loading) {
    return <Toaster />;
  }

  if (!isAuth) {
    return <Toaster />;
  }

  return width > 760 ? (
    <History parkings={data?.parkingHistory as ParkingRecord[]} />
  ) : (
    <History parkings={data?.parkingHistory as ParkingRecord[]} />
  );
};
