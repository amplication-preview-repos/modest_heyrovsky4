export type Process = {
  associatedDevice: string | null;
  createdAt: Date;
  id: string;
  linkedDevice: string | null;
  name: string | null;
  pid: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
