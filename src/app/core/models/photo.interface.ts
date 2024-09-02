export interface Photo {
  id: Required<string>;
  owner: string;
  secret: string;
  server: string;
  title: string;
}
