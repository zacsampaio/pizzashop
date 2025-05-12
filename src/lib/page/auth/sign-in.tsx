import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        }
      });
    } catch (error) {
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={"ghost"} asChild className="absolute top-8 right-8">
          <Link to="/sign-up">
            Novo Estabelecimento
          </Link>
        </Button>

        <div className="justify-content flex w-[350px] flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
