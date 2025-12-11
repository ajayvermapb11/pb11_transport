"use client";

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Package,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Truck,
  Trash2,
  Check,
  X,
  Send,
  MessageSquare,
  Eye,
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
  adminNotes?: string;
  adminResponse?: string;
  respondedAt?: string;
  respondedBy?: string;
  createdAt: string;
}

export default function AdminQuotesPage() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [adminResponse, setAdminResponse] = useState("");
  const [updating, setUpdating] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "admin") {
      router.push("/dashboard");
    } else {
      fetchQuotes();
    }
  }, [isAuthenticated, user, router]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("/api/quotes");
      const data = await response.json();
      if (data.success) {
        setQuotes(data.data);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendResponse = async (
    quoteId: string,
    status: string,
    price?: number,
    notes?: string,
    response?: string
  ) => {
    setUpdating(true);
    try {
      const response_api = await fetch(`/api/quotes/${quoteId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          ...(price && { estimatedPrice: price }),
          ...(notes !== undefined && { adminNotes: notes }),
          ...(response !== undefined && { adminResponse: response }),
        }),
      });

      const data = await response_api.json();
      if (data.success) {
        fetchQuotes();
        setSelectedQuote(null);
        setEstimatedPrice("");
        setAdminNotes("");
        setAdminResponse("");
      }
    } catch (error) {
      console.error("Error updating quote:", error);
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteQuote = async (quoteId: string) => {
    if (!confirm("Are you sure you want to delete this quote?")) return;

    try {
      const response = await fetch(`/api/quotes/${quoteId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (data.success) {
        fetchQuotes();
      }
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  const openQuoteModal = (quote: Quote) => {
    setSelectedQuote(quote);
    setEstimatedPrice(quote.estimatedPrice?.toString() || "");
    setAdminNotes(quote.adminNotes || "");
    setAdminResponse(quote.adminResponse || "");
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

  const filteredQuotes =
    filterStatus === "all"
      ? quotes
      : quotes.filter((q) => q.status === filterStatus);

  if (!isAuthenticated || user?.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E3F9E7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header with Stats */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6" style={{ color: "#1a202c" }}>
              Quote Management Dashboard
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-2xl font-bold text-gray-900">
                  {quotes.length}
                </p>
                <p className="text-sm text-gray-600">Total Quotes</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-2xl font-bold text-yellow-700">
                  {quotes.filter((q) => q.status === "pending").length}
                </p>
                <p className="text-sm text-yellow-700">Pending</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-2xl font-bold text-green-700">
                  {quotes.filter((q) => q.status === "approved").length}
                </p>
                <p className="text-sm text-green-700">Approved</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-2xl font-bold text-blue-700">
                  {quotes.filter((q) => q.status === "completed").length}
                </p>
                <p className="text-sm text-blue-700">Completed</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-2xl font-bold text-purple-700">
                  {quotes.filter((q) => q.adminResponse).length}
                </p>
                <p className="text-sm text-purple-700">Responded</p>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === "all"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All ({quotes.length})
            </button>
            <button
              onClick={() => setFilterStatus("pending")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === "pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Pending ({quotes.filter((q) => q.status === "pending").length})
            </button>
            <button
              onClick={() => setFilterStatus("approved")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === "approved"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Approved ({quotes.filter((q) => q.status === "approved").length})
            </button>
            <button
              onClick={() => setFilterStatus("completed")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === "completed"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Completed ({quotes.filter((q) => q.status === "completed").length})
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading quotes...</p>
            </div>
          ) : filteredQuotes.length === 0 ? (
            <div className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-gray-600">No quotes found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Route Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schedule
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Van
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Response
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredQuotes.map((quote) => (
                    <tr key={quote._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-start gap-2">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {quote.customerName}
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <Mail className="h-3 w-3" />
                              {quote.email}
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {quote.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-green-600 font-semibold">From:</span>
                            <span>{quote.pickupLocation}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-red-600 font-semibold">To:</span>
                            <span>{quote.dropLocation}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          {new Date(quote.date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="h-4 w-4" />
                          {quote.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Truck className="h-4 w-4 text-primary-600" />
                          <span className="text-sm font-medium text-gray-900">
                            {quote.vanType}
                          </span>
                        </div>
                        {quote.estimatedPrice && (
                          <div className="text-sm font-semibold text-green-600 mt-1">
                            £{quote.estimatedPrice}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(
                            quote.status
                          )}`}
                        >
                          {quote.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {quote.adminResponse ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-xs font-medium">Sent</span>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400">No response</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openQuoteModal(quote)}
                            className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                            title="View & Respond"
                          >
                            <Eye className="h-4 w-4" />
                            Manage
                          </button>
                          <button
                            onClick={() => handleDeleteQuote(quote._id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal with Response Feature */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Quote #{selectedQuote._id.slice(-6)}
                </h2>
                <p className="text-sm text-gray-500">
                  Submitted on {new Date(selectedQuote.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Customer Information */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Customer Information
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Name
                    </label>
                    <p className="text-gray-900 font-medium">{selectedQuote.customerName}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Email
                    </label>
                    <p className="text-gray-900">{selectedQuote.email}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Phone
                    </label>
                    <p className="text-gray-900">{selectedQuote.phone}</p>
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Trip Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Pickup Location
                    </label>
                    <p className="text-gray-900 font-medium">
                      {selectedQuote.pickupLocation}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Drop Location
                    </label>
                    <p className="text-gray-900 font-medium">
                      {selectedQuote.dropLocation}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Date
                    </label>
                    <p className="text-gray-900">
                      {new Date(selectedQuote.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Time
                    </label>
                    <p className="text-gray-900">{selectedQuote.time}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Van Type
                    </label>
                    <p className="text-gray-900 font-medium">{selectedQuote.vanType}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">
                      Current Status
                    </label>
                    <p>
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(
                          selectedQuote.status
                        )}`}
                      >
                        {selectedQuote.status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Admin Management Section */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Admin Management
                </h3>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Estimated Price (£) *
                  </label>
                  <input
                    type="number"
                    value={estimatedPrice}
                    onChange={(e) => setEstimatedPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter estimated price"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Internal Admin Notes (Not visible to customer)
                  </label>
                  <textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Add internal notes..."
                  />
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <label className="text-sm font-semibold text-green-900 block mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Customer Response Message *
                  </label>
                  <p className="text-xs text-green-700 mb-3">
                    This message will be sent to the customer. Include pricing details and next steps.
                  </p>
                  <textarea
                    value={adminResponse}
                    onChange={(e) => setAdminResponse(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder={`Dear ${selectedQuote.customerName},\n\nThank you for your quote request. We are pleased to provide the following estimate:\n\nEstimated Price: £${estimatedPrice || 'XXX'}\nVan Type: ${selectedQuote.vanType}\n\nNext Steps:\n1. ...\n2. ...\n\nBest regards,\nPB11 Transport Team`}
                  />
                </div>

                {selectedQuote.adminResponse && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-blue-900 mb-2">
                      Previous Response (sent {selectedQuote.respondedAt && new Date(selectedQuote.respondedAt).toLocaleString()})
                    </p>
                    <p className="text-sm text-blue-900 whitespace-pre-wrap">
                      {selectedQuote.adminResponse}
                    </p>
                    {selectedQuote.respondedBy && (
                      <p className="text-xs text-blue-700 mt-2">
                        - {selectedQuote.respondedBy}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      handleSendResponse(
                        selectedQuote._id,
                        "approved",
                        parseFloat(estimatedPrice) || undefined,
                        adminNotes,
                        adminResponse
                      )
                    }
                    disabled={updating || !adminResponse.trim()}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    <Check className="h-5 w-5" />
                    Approve & Send Response
                  </button>
                  <button
                    onClick={() =>
                      handleSendResponse(
                        selectedQuote._id,
                        "rejected",
                        undefined,
                        adminNotes,
                        adminResponse
                      )
                    }
                    disabled={updating || !adminResponse.trim()}
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    <X className="h-5 w-5" />
                    Reject & Send Response
                  </button>
                  <button
                    onClick={() =>
                      handleSendResponse(
                        selectedQuote._id,
                        "completed",
                        parseFloat(estimatedPrice) || undefined,
                        adminNotes,
                        adminResponse
                      )
                    }
                    disabled={updating}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    Mark as Completed
                  </button>
                  <button
                    onClick={() =>
                      handleSendResponse(
                        selectedQuote._id,
                        selectedQuote.status,
                        parseFloat(estimatedPrice) || undefined,
                        adminNotes,
                        adminResponse
                      )
                    }
                    disabled={updating || !adminResponse.trim()}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    <Send className="h-5 w-5" />
                    Send Response Only
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
