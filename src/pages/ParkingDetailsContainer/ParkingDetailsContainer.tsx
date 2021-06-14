import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useHttp } from "../../hooks/http.hook";
import { useMode } from "../../hooks/mode.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { ParkingDetails } from "../../components/ParkingDetails/ParkingDetails";
import { Wrapper } from "./ParkingDetails.styles";

export const ParkingDetailsContainer = () => {
  const req = useHttp();
  const { id } = useParams<{ id: string }>();
  const routes = useRoutes();
  const theme = useMode()[2];
  const [parking, setParking] = useState<ParkingRecord>();
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      setAuth(false);
      return;
    }
    req<SignInDto, UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setParking(res.value?.parkingHistory.filter((el) => el._id === id)[0]);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  if (isError) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ParkingDetails parking={parking as ParkingRecord} />
      </Wrapper>
    </ThemeProvider>
  );
};
