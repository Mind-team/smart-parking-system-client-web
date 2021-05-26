import { useEffect, useState } from "react";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { History } from "./History";

export const HistoryContainer = () => {
  const [req, routes, width] = [
    useHttp(),
    useAPI(),
    useWindowDimensions().width,
  ];
  const [data, setData] = useState<UserRecord>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      return;
    }
    req<SignInDto, UserRecord>({
      url: routes.signIn(),
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      if (!result.isExpected) {
        return;
      }
      setData(result.value);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>Loading</>;
  }
  return width > 760 ? <History userData={data as UserRecord} /> : <History userData={data as UserRecord} />;
};
