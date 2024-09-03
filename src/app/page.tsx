"use client";

import RandomTaskSelector from "@/components/RandomTaskSelector";
import RandomUserSelector from "@/components/RandomUserSelector";
import React, { useState } from "react";

export default function MainPage() {
  return (
    <div>
      <RandomUserSelector />
      <RandomTaskSelector />
    </div>
  );
}
