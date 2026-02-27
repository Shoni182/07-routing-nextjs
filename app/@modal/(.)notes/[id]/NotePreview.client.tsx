"use client";

import Modal from "@/components/NotePreviewModal/NotePreviewModal";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./Modal.module.css";

//:use Query

const NoteModal = () => {
  //: Modal

  const { id } = useParams();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", { id: id }],
    queryFn: () => fetchNoteById(id as string),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Some error..</p>;

  return (
    <Modal>
      <div className={css.modalContainer}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
        <p className={css.tag}>{note.tag}</p>
      </div>
    </Modal>
  );
};

export default NoteModal;
