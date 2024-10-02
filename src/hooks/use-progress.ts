import nProgress from "nprogress";
import { useEffect } from "react";

type Props = {
  isLoading: boolean;
};
nProgress.configure({ showSpinner: false });

export function useProgess({ isLoading }: Props) {
  useEffect(() => {
    if (isLoading) {
      nProgress.start();
    } else {
      nProgress.done();
    }
    return () => {
      nProgress.done();
    };
  }, [isLoading]);
}
