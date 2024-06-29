import { TextInput } from "@/components/form/TextInput";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";

export default function Index() {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      email: "test",
      password: "",
    },
  });

  interface FormData {
    email: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" className="border border-navy" />
        <TextInput type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="border border-navy" />
      </div>
      <Button type="submit" className="text-xs h-10 font-bold">
        ログイン
      </Button>
    </form>
  );
}
