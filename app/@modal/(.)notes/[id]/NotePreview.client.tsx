"use client";

import Modal from "@/components/NotePreviewModal/NotePreviewModal";
import { Note } from "@/types/note";

// import NotePreview from "./page";

interface Props {
  note: Note;
}

const NoteModal = ({ note }: Props) => {
  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NoteModal;
