import { useAuth } from "@/context/useAuth";
import { API } from "@/lib/utils";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MeetingDetails() {
  const { id } = useParams();
  const { accessToken } = useAuth();

  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetingDetails = async () => {
      try {
        const res = await API.get(`/meetings/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status === 200) {
          setMeeting(res.data);
        }
      } catch (error) {
        setError("Failed to load meeting details.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetingDetails();
  }, [id]);
  () => {
    const fetchMeetingDetails = async () => {
      try {
        const res = await API.get(`/meetings/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status === 200) {
          setMeeting(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetingDetails();
  },
    [id];

  if (loading)
    return <div className="p-6 text-gray-600"><Loader className='animate-spin'/></div>;
  if (!meeting)
    return <div className="p-6 text-red-500">Meeting not found.</div>;

  return (
    <div className="p-6 min-h-screen flex flex-col gap-6">
      <h1 className="text-2xl font-bold">{meeting.title}</h1>

      {/* Basic Info */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <p>
          <span className="font-semibold">Meeting Date:</span>{" "}
          {new Date(meeting.meeting_date).toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Start Time:</span>{" "}
          {meeting.start_time}
        </p>
        <p>
          <span className="font-semibold">Meet URL:</span>{" "}
          <a
            href={meeting.meet_url}
            className="text-blue-600 underline"
            target="_blank"
          >
            Join Meeting
          </a>
        </p>
        <p className="font-semibold mb-1">Audio Player:</p>
        <audio controls className="w-full mb-2 mt-1">
          <source src={meeting.audio_url} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>

        <p>
          <span className="font-semibold">Audio URL:</span>{" "}
          <a
            href={meeting.audio_url}
            className="text-blue-600 underline"
            target="_blank"
          >
            Download Audio
          </a>
        </p>
      </div>

      {/* Participants */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-2">Participants</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {meeting.participants?.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Transcript */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-2">Transcript</h2>
        {meeting.transcript?.map((t, index) => (
          <div key={index} className="mb-4 p-3 border rounded-lg bg-gray-50">
            <p className="text-sm text-gray-600">
              <b>Speaker:</b> {t.speaker}
            </p>
            <p className="text-sm text-gray-600">
              <b>Time:</b> {t.start_time} - {t.end_time}
            </p>
            <p className="mt-2 text-gray-800">{t.text}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h2 className="text-xl font-semibold mb-2">Summary Overview</h2>
        <p className="text-gray-800 mb-4">{meeting.summary?.overview}</p>

        <h3 className="font-semibold text-lg">Notes</h3>
        {meeting.summary?.notes?.map((note, idx) => (
          <div key={idx} className="mb-4 p-3 border rounded-lg bg-gray-50">
            <p>
              <b>Topic:</b> {note.topic}
            </p>
            <p>
              <b>Time:</b> {note.start_time} - {note.end_time}
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              {note.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <h3 className="font-semibold text-lg mt-4">Action Items</h3>
        {meeting.summary.action_items.map((item, i) => (
          <li key={i} className="mb-2">
            {item.items && Array.isArray(item.items) && (
              <ul className="list-disc pl-4">
                {item.items.map((sub, j) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            )}

            {item.assignee && (
              <p className="text-sm text-gray-600">
                Assigned to: <b>{item.assignee}</b>
              </p>
            )}
          </li>
        ))}
      </div>
    </div>
  );
}
