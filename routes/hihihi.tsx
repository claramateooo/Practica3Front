import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Form from "../islands/Form.tsx";

const Hihihi = (props: PageProps) => {
  const SayHi = useSignal("");

  return (
    <Form/>
  );
};

export default Hihihi;