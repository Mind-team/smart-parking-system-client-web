interface IBaseRoute {
  auth: string;
  home: string;
  history: string;
}

const BaseRoute: IBaseRoute = {
  auth: "/auth",
  home: "/home",
  history: "/history",
};

interface IRoute {
  auth: {
    login: string;
    registration: string;
  };
  home: {
    main: string;
  };
  history: {
    main: string;
    details: string;
  };
}

const Route: IRoute = {
  auth: {
    login: BaseRoute.auth + "/login",
    registration: BaseRoute.auth + "/registration",
  },
  home: {
    main: BaseRoute.home,
  },
  history: {
    main: BaseRoute.history,
    details: BaseRoute.history + "/details" + "/:id",
  },
};

export const useRoute = (): IRoute => {
  return Route;
};
