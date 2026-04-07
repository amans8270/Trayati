"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";

import { Button } from "@/components/ui/button";

export function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Placeholder.configure({
        placeholder: "Write the story of your stay, the moments that stood out, and what future guests should know.",
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "min-h-[240px] rounded-[28px] border border-[hsl(var(--border))] bg-white/80 px-4 py-3 outline-none prose prose-stone max-w-none",
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleBold().run()}>
          Bold
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleItalic().run()}>
          Italic
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleBulletList().run()}>
          Bullet list
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>
          Heading
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
