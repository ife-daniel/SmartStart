import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function EmployeeIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/(tabs)/home");
  }, []);
  return null;
}
