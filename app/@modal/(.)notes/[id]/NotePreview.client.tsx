"use client";

import Modal from "@/components/NotePreviewModal/NotePreviewModal";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
// import NotePreview from "./page";

//:use Query

const NoteModal = () => {
  const { id } = useParams();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", { id: id }],
    queryFn: () => fetchNoteById(id as string),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Some error..</p>;

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NoteModal;
