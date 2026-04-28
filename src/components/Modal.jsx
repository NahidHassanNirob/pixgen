"use client";

import { authClient } from "@/lib/authClient";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Settings, User } from "lucide-react";

export function OpenModal() {
  const handelSubmit = async (e) => {
    console.log(e);
    e.preventDefault()
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    await authClient.updateUser({
        image:photo,
        name,
    })
  };
  return (
    <Modal>
      <Button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold text-sm hover:opacity-90 transition-all">
        <Settings size={18} /> Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <User className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handelSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="photo" type="url">
                    <Label>Photo URL</Label>
                    <Input placeholder="Enter your photo url" />
                  </TextField>
                  <Modal.Footer className="mt-3">
                    <Button slot="close" type="submit" className="w-full bg-blue-500">
                      Update
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
