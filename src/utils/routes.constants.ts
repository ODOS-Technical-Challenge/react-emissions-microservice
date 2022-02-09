interface RouteType {
  path: string;
  roles?: string[];
}

export const ROUTES: Record<string, RouteType> = {
  Login: { path: "login" },
  Home: { path: "/home" },
  Nearby: { path: "/nearby" },
  Favorites: { path: "/favorites" },
  Engineer: { path: "/engineer" },
  View: { path: "/view/:id" },
};
