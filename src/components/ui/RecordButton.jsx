import { useState, useEffect } from "react";
import { Mic, Square } from "lucide-react";

export default function RecordButton() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = (e) => {
        setAudioChunks((prev) => [...prev, e.data]);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);

        // Save or send audio somewhere (e.g., upload to backend)
        console.log("Recorded audio:", url);

        setAudioChunks([]);
      };
    }
  }, [mediaRecorder, audioChunks]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Mic access denied:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <button
      onClick={recording ? stopRecording : startRecording}
      className={`p-2 rounded-full ${
        recording ? "bg-gray-500" : "bg-red-500"
      } text-white hover:opacity-90`}
    >
      {recording ? <Square size={18} /> : <Mic size={18} />}
    </button>
  );
}
