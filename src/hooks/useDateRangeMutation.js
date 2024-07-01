"use client";

import React, { createContext, useContext, useState } from "react";
import { subDays } from "date-fns";
import { getUserInsights } from "@/lib/insights/getUserInsights";

const DateRangeContext = createContext();

export const DateRangeProvider = ({ children }) => {
  // Insights data
  const [insights, setInsights] = useState([]);
  const [previousInsights, setPreviousInsights] = useState([]);
  const [previousStart, setPreviousStart] = useState([]);
  const [latestInsight, setLatestInsight] = useState([]);
  const [insightsLoading, setInsightsLoading] = useState(true);
  const [totalInsightsCount, setTotalInsightsCount] = useState(0);

  const fetchInsights = (userId, userName) => {
    setInsightsLoading(true);
    getUserInsights(
      userId,
      userName,
      selectedDateRange.start,
      selectedDateRange.end
    ).then(
      ({
        insights,
        previousInsights,
        previousStart,
        latestInsight,
        totalInsightsCount,
      }) => {
        setInsightsLoading(false);
        setInsights(insights);
        setPreviousInsights(previousInsights);
        setPreviousStart(previousStart);
        setLatestInsight(latestInsight);
        setTotalInsightsCount(totalInsightsCount);
      }
    );
  };

  // Date range
  const startOfDay = new Date(subDays(new Date(), 6));
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(new Date());
  endOfDay.setHours(23, 59, 59, 999);

  const [selectedDateRange, setSelectedDateRange] = useState({
    start: startOfDay,
    end: endOfDay,
  });

  const value = {
    fetchInsights,
    insightsLoading,

    selectedDateRange,
    setSelectedDateRange,

    insights,
    setInsights,

    previousInsights,
    setPreviousInsights,

    previousStart,
    setPreviousStart,

    latestInsight,
    setLatestInsight,

    totalInsightsCount,
    setTotalInsightsCount,
  };

  return (
    <DateRangeContext.Provider value={value}>
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => useContext(DateRangeContext);
