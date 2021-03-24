type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
  createRecordError: Error | null;
  createTagError: Error | null;
};

type Tag = {
  id: string;
  name: string;
};

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated"; //联合类型
  update: (id: string, name: string) => "success" | "not found" | "duplicated";
  remove: (id: string) => boolean;
  save: () => void;
};
type RootState = {
  createTagError: Error | null;
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
};

interface Window {}
