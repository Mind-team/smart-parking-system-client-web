import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Home } from "./Home";

export const HomeContainer = () => {
  const [req, api, width] = [
    useHttp(),
    useAPI(),
    useWindowDimensions().width,
  ];
  const [lastParking, setLastParking] = useState<ParkingRecord>();
  const [loading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      setAuth(false);
      setLoading(false);
      return;
    }
    req<SignInDto, ParkingRecord>({
      url: api.lastParkingHistoryElement(),
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
      setLastParking(result.value);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>Loading</>;
  }

  if (!isAuth) {
    return <Redirect to="signIn" />;
  }

  return width > 760 ? (
    <Home parking={lastParking as ParkingRecord} />
  ) : (
    <Home parking={lastParking as ParkingRecord} />
  );
};
