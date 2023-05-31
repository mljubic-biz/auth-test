import { useEffect } from "react";

export const CLIENT_CALLBACK_URL_KEY = "client_callback_url";

export const useSetClientCallbackUrl = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  useEffect(() => {
    if (searchParams.clientCallbackUrl) {
      localStorage.setItem(
        CLIENT_CALLBACK_URL_KEY,
        searchParams.clientCallbackUrl as string
      );
    }
  }, [searchParams.clientCallbackUrl]);
};

export const redirectToClientCallbackUrl = (
  accessToken: string,
  refreshToken: string
) => {
  try {
    const clientCallbackUrl = localStorage.getItem(CLIENT_CALLBACK_URL_KEY);
    if (!clientCallbackUrl) {
      return;
    }

    const url = new URL(clientCallbackUrl);
    url.searchParams.append("accessToken", accessToken);
    url.searchParams.append("refreshToken", refreshToken);
    window.location.replace(url);
  } catch (error) {
    return;
  }
};
