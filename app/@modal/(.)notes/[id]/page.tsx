import { fetchNoteById } from "@/lib/api";
// import css from "./Modal.module.css";
impoer Note

type Props = {
  // тут обовязково має бут "params"
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;
