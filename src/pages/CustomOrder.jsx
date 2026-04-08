import { useEffect } from "react";
import CustomOrderForm from "../components/sections/CustomOrderForm";

export default function CustomOrder() {
  useEffect(() => {
    if (navigator.userAgent === "ReactSnap") {
      window.SNAP_READY = true;
    }
  }, []);

  return <CustomOrderForm />;
}