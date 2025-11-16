import AiAssistant from "@/components/ui/AiAssistant";
import { useAuth } from "@/context/useAuth";
import { API } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);     // NEW
  const [error, setError] = useState(null);         // NEW

  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await API.get("/meetings/metadata", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (res.status === 200) {
          const data = Array.isArray(res.data)
            ? res.data
            : res.data?.data || [];
          setMeetings(data);
        }
      } catch (error) {
        console.log(error);
        setError("Failed to load meetings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div className="p-6 flex flex-col min-h-screen">
      <h1 className="text-xl font-bold mb-4">Meetings Page</h1>
      <p className="text-gray-600 mb-6">Your meetings appear below.</p>

      {/* ==================== LOADING STATE ===================== */}
      {loading && (
        <div className="text-center py-10 text-gray-500">
          <Loader className='animate-spin'/>
        </div>
      )}

      {/* ==================== ERROR STATE ======================= */}
      {error && (
        <div className="text-center py-4 text-red-500 font-medium">
          {error}
        </div>
      )}

      {/* ==================== MEETINGS GRID ===================== */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meetings.length === 0 ? (
            <div>no meetings found</div>
          ) : (
            meetings.map((item) => (
              <Link
                to={`/meeting/${item.id}`}
                key={item.id}
                className="p-5 bg-white rounded-2xl shadow-md border flex flex-col gap-2 hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Meeting Date:</span>{" "}
                  {new Date(item.meeting_date).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Start Time:</span>{" "}
                  {item.start_time}
                </p>
              </Link>
            ))
          )}
        </div>
      )}

      <AiAssistant />
    </div>
  );
}
