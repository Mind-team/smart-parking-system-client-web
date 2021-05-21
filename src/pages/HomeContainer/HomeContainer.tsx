import { useEffect, useState } from "react";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { useHttp } from "../../hooks/http.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Home } from "./Home";

export const HomeContainer = () => {
  const req = useHttp();
  const [lastParking, setLastParking] = useState<ParkingRecord>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      return;
    }
    req<SignInDto, ParkingRecord>({
      url: "http://localhost:5000/user/lastParkingHistoryElement",
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

  return (
    <>
      {useWindowDimensions().width > 760 ? (
        loading ? (
          "Loading"
        ) : (
          <Home parking={lastParking as ParkingRecord} />
        )
      ) : loading ? (
        "Loading"
      ) : (
        <Home parking={lastParking as ParkingRecord} />
      )}
    </>
  );
};
