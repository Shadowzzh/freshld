import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import { useForm } from "@tanstack/react-form";
export function FreeTrial() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const sendEmail = api.email.sendEmail.useMutation({
    onSuccess: () => {
      toast.success("提交成功");
      onClose();
    },
    onError: () => {
      toast.error("提交失败");
    },
  });
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      node: "",
      company: "",
      address: "",
    },
    onSubmit: ({ value, formApi }) => {
      sendEmail.mutate(
        {
          name: value.name,
          phone: value.phone,
          email: value.email,
          node: value.node,
          company: value.company,
          address: value.address,
        },
        {
          onSuccess: () => {
            formApi.reset();
          },
        },
      );
    },
  });
  return (
    <>
      <button
        onClick={onOpen}
        className="rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#b8e600]"
      >
        获取演示
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">免费试用</ModalHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <ModalBody>
                <form.Field
                  name="company"
                  validators={{
                    onChange: ({ value }) => {
                      console.log(value);
                      return value.length <= 0 ? "公司名称不能为空" : null;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      label="公司名称"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      isInvalid={field.state.meta.errors.length > 0}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field>
                <form.Field
                  name="name"
                  validators={{
                    onChange: ({ value }) => {
                      return value.length <= 0 ? "联系人姓名不能为空" : null;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      label="联系人姓名"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field>
                <form.Field
                  name="phone"
                  validators={{
                    onChange: ({ value }) => {
                      if (value.length <= 0) {
                        return "联系人电话不能为空";
                      }
                      if (!/^\d+$/.test(value)) {
                        return "联系人电话必须是数字";
                      }
                      if (value.length !== 11) {
                        return "联系人电话必须是11位数字";
                      }
                      return null;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      label="联系人电话"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field>
                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) => {
                      if (value.length <= 0) {
                        return "邮箱不能为空";
                      }
                      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        return "邮箱格式不正确";
                      }
                      return null;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      label="邮箱"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field>
                <form.Field
                  name="node"
                  validators={{
                    onSubmit: ({ value }) => {
                      if (value.length <= 0) {
                        return "预计采购点数不能为空";
                      }
                      if (!/^\d+$/.test(value)) {
                        return "预计采购点数必须是数字";
                      }
                      if (parseInt(value) <= 0) {
                        return "预计采购点数必须大于0";
                      }
                      return null;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      type="number"
                      label="预计采购点数"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field>
                <form.Field name="address">
                  {(field) => (
                    <Input
                      label="地址(可选)"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                    />
                  )}
                </form.Field>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  type="submit"
                  isLoading={sendEmail.isPending}
                >
                  提交
                </Button>
              </ModalFooter>
            </form>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
