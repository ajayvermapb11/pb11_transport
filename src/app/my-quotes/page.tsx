"use client";

import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import {
  Package,
  MapPin,
  Calendar,
  Clock,
  Truck,
  MessageSquare,
  Mail,
  Phone,
  Eye,
  Search,
} from "lucide-react";

interface Quote {
  _id: string;
  customerName: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  date: string;
  time: string;
  vanType: string;
  status: "pending" | "approved" | "rejected" | "completed";
  estimatedPrice?: number;
  adminResponse?: string;
  respondedAt?: string;
  respondedBy?: string;
  createdAt: string;
}

export default function MyQuotesPage() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchQuotes();
    } else {
      setLoading(false);
      setSearchMode(true);
    }
  }, [isAuthenticated, user]);

  const fetchQuotes = async (email?: string) => {
    setLoading(true);
    try {
      const url = email
        ? `/api/quotes/my-quotes?email=${encodeURIComponent(email)}`
        : "/api/quotes/my-quotes";

      const response = await fetch(url);
      const data = await response.json();
      if (data.success) {
        setQuotes(data.data);
      } else {
        setQuotes([]);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchEmail.trim()) {
      fetchQuotes(searchEmail.trim());
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "approved":
        return "bg-green-100 text-green-800 border-green-300";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-300";
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "pending":
        return "Your quote is being reviewed by our team.";
      case "approved":
        return "Great news! Your quote has been approved.";
      case "rejected":
        return "We're sorry, but we couldn't fulfill this request.";
      case "completed":
        return "This quote has been completed.";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E3F9E7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#1a202c" }}>
            My Quote Requests
          </h1>
          <p className="text-gray-600 mb-8">
            View and track your transportation quote requests
          </p>

          {/* Email Search for Guest Users */}
          {searchMode && (
            <div className="mb-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-primary-950 mb-4">
                Find Your Quotes by Email
              </h2>
              <form onSubmit={handleEmailSearch} className="flex gap-3">
                <input
                  type="email"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-3">
                Enter the email address you used when submitting your quote
                request.
              </p>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading your quotes...</p>
            </div>
          ) : quotes.length === 0 ? (
            <div className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-gray-600">No quotes found</p>
              <p className="text-sm text-gray-500 mt-1">
                {searchMode
                  ? "Try searching with a different email address"
                  : "You haven't submitted any quote requests yet"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {quotes.map((quote) => (
                <div
                  key={quote._id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Quote #{quote._id.slice(-6)}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Submitted on{" "}
                        {new Date(quote.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`px-4 py-2 inline-flex text-sm font-semibold rounded-full border ${getStatusColor(
                          quote.status
                        )}`}
                      >
                        {quote.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Trip Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-gray-500">From:</span>
                            <span className="ml-2 font-medium text-gray-900">
                              {quote.pickupLocation}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-gray-500">To:</span>
                            <span className="ml-2 font-medium text-gray-900">
                              {quote.dropLocation}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-900">
                            {new Date(quote.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-900">{quote.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-primary-600" />
                          <span className="font-medium text-gray-900">
                            {quote.vanType} Van
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Status Update
                      </h4>
                      <div
                        className={`p-4 rounded-lg border ${
                          quote.status === "approved"
                            ? "bg-green-50 border-green-200"
                            : quote.status === "rejected"
                            ? "bg-red-50 border-red-200"
                            : quote.status === "completed"
                            ? "bg-blue-50 border-blue-200"
                            : "bg-yellow-50 border-yellow-200"
                        }`}
                      >
                        <p className="text-sm text-gray-700 mb-2">
                          {getStatusMessage(quote.status)}
                        </p>
                        {quote.estimatedPrice && (
                          <div className="mt-3 pt-3 border-t border-gray-300">
                            <p className="text-xs text-gray-600">
                              Estimated Price
                            </p>
                            <p className="text-2xl font-bold text-green-600">
                              £{quote.estimatedPrice}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {quote.adminResponse && (
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-primary-600" />
                        <h4 className="font-semibold text-primary-950">
                          Response from PB11 Transport
                        </h4>
                      </div>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">
                        {quote.adminResponse}
                      </p>
                      {quote.respondedAt && (
                        <p className="text-xs text-gray-500 mt-2">
                          Responded on{" "}
                          {new Date(quote.respondedAt).toLocaleString()}
                          {quote.respondedBy && ` by ${quote.respondedBy}`}
                        </p>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedQuote(quote)}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Eye className="h-4 w-4" />
                    View Full Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Quote Details #{selectedQuote._id.slice(-6)}
                </h2>
                <span
                  className={`mt-2 px-3 py-1 inline-flex text-xs font-semibold rounded-full border ${getStatusColor(
                    selectedQuote.status
                  )}`}
                >
                  {selectedQuote.status.toUpperCase()}
                </span>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Name:</span>
                    <span className="text-gray-900">
                      {selectedQuote.customerName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900">{selectedQuote.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900">{selectedQuote.phone}</span>
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Trip Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 mb-1">Pickup Location</p>
                    <p className="font-medium text-gray-900">
                      {selectedQuote.pickupLocation}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Drop Location</p>
                    <p className="font-medium text-gray-900">
                      {selectedQuote.dropLocation}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Date</p>
                    <p className="font-medium text-gray-900">
                      {new Date(selectedQuote.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Time</p>
                    <p className="font-medium text-gray-900">
                      {selectedQuote.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Van Type</p>
                    <p className="font-medium text-gray-900">
                      {selectedQuote.vanType}
                    </p>
                  </div>
                  {selectedQuote.estimatedPrice && (
                    <div>
                      <p className="text-gray-600 mb-1">Estimated Price</p>
                      <p className="text-2xl font-bold text-green-600">
                        £{selectedQuote.estimatedPrice}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Admin Response */}
              {selectedQuote.adminResponse && (
                <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-6 w-6 text-primary-600" />
                    <h3 className="font-semibold text-primary-950">
                      Official Response
                    </h3>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="text-gray-900 whitespace-pre-wrap">
                      {selectedQuote.adminResponse}
                    </p>
                  </div>
                  {selectedQuote.respondedAt && (
                    <p className="text-xs text-gray-600 mt-3">
                      Sent on{" "}
                      {new Date(selectedQuote.respondedAt).toLocaleString()}
                      {selectedQuote.respondedBy &&
                        ` by ${selectedQuote.respondedBy}`}
                    </p>
                  )}
                </div>
              )}

              {/* Submission Info */}
              <div className="text-sm text-gray-500 border-t pt-4">
                <p>
                  Request submitted on{" "}
                  {new Date(selectedQuote.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
