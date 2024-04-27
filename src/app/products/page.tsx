"use client" 
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Card from "@/components/ui/card";

export default function Page() {
  return (
    <Router>
      <ProductPage />
    </Router>
  );
}

function ProductPage() {
  return (
    <section className="relative overflow-hidden  pt-[120px] md:pt-[130px] lg:pt-[160px] p-120px">
      <h1 className="text-5xl font-bold mb-8 text-center border border-black p-6 ">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  <ProductCard
    title="Athena Biz"
    description="Comprehensive cybersecurity suite designed to protect your business against quantum-level threats."
    link="/products/athena-biz"
  />
  <ProductCard
    title="Employee Management System"
    description="Training programs to equip professionals with skills to address quantum-level security challenges."
    link="/products/quantum-training"
  />
  <ProductCard
    title="Quantum Resilience Research Lab"
    description="Cutting-edge research lab focused on developing quantum-resilient cybersecurity solutions."
    link="/products/quantum-research"
  />
  <ProductCard
    title="Data Encryption"
    description="Advanced encryption solutions leveraging quantum computing principles for maximum security."
    link="/products/quantum-encryption"
  />
  <ProductCard
    title="Anomaly & Threat Detection"
    description="Real-time threat detection systems powered by quantum algorithms and machine learning."
    link="/products/quantum-threat-detection"
  />
  <ProductCard
    title=" Network Security"
    description="Next-generation network security solutions utilizing quantum encryption and authentication protocols."
    link="/products/quantum-network-security"
  />
  <ProductCard
    title=" Cloud Computing"
    description="Cloud computing infrastructure optimized for quantum computing workloads and applications."
    link="/products/quantum-cloud"
  />
  <ProductCard
    title="AI Integration Board"
    description="Integrate quantum computing capabilities into artificial intelligence algorithms and systems for enhanced performance."
    link="/products/quantum-ai"
  />
  <ProductCard
    title="Zero Trust Network"
    description="Zero Trust Network for superior Authentication."
    link="/products/ztn"
  />
  <ProductCard
    title="Private VPN"
    description="Enjoy browser activity security across devices"
    link="/products/private-vpn"
  />
  <ProductCard
    title="Business VPN"
    description="Business Level VPN for secure document download and upload plus the overall protection."
    link="/products/business-vpn"
  />
  <ProductCard
    title="Asset Tracking"
    description="Monitor asset perfomance on the go, on any device."
    link="/products/quantum-blockchain"
  />
  <ProductCard
    title="BYOD and Unenrollment"
    description="Monitor employee activity in a bring-your-own-device environment without information leaks"
    link="/products/byod"
  />
  <ProductCard
    title="Biometric Security"
    description="Deploy biometric verificatioin for your business environment (compatible with any hardware type)"
    link="/products/biometric-security"
  />
  <ProductCard
    title="Compliance & Regulations"
    description="Focus on business, we will handle all your compliance issues"
    link="/products/compliance-regulations"
  />
  <ProductCard
    title="System Risk Assest"
    description="Risk assesment reporting and compliance advisory"
    link="/products/compliance"
  />
  <ProductCard
    title="Firewall as a service"
    description="Smooth controls for your entire infrastructure"
    link="/products/quantum-threat-detection"
  />
  <ProductCard
    title="Secure Remote Management"
    description="Manage your business remotely with secure access"
    link="/products/quantum-network-security"
  />
  <ProductCard
    title="Site-to-Site Proxy"
    description="Enjoy surfing protection as you navigate from one site to the other within your business ecosystem"
    link="/products/quantum-cloud"
  />
  <ProductCard
    title="Semper VPN"
    description="Enabling both remote and on-site employees to manually switch on a VPN connection can pose significant security threats."
    link="/products/quantum-ai"
  />
</div>
    </section>
  );
}

function ProductCard({ title, description, link }: {title: string, description: string, link: string}) {
    return (

      <div className="bg-gray-600 rounded-lg shadow-md p-6">
        <Card>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-xl mb-4">{description}</p>
        <Link to={link} className="text-primary-600 font-extrabold hover:underline">
          Learn More
        </Link>
        </Card>
      </div>
    );
  }
