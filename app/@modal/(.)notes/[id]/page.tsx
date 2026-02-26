import { fetchNoteById } from "@/lib/api";
// import css from "./Modal.module.css";
import NoteModal from "./NotePreview.client";
type Props = {
  // тут обовязково має бут "params"
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteModal note={note} />;
};

export default NotePreview;
