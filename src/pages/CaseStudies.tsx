import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import dataVisualizationImage from "@/assets/data-visualization-team.jpg";
import codeAnalyticsImage from "@/assets/code-analytics.jpg";
import developerWorkspaceImage from "@/assets/developer-workspace.jpg";
import programmingDashboardImage from "@/assets/programming-dashboard.jpg";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            End-to-End Data Engineering Success Stories
          </h1>
          <p className="text-xl text-white/90 mb-8">
            See how we've transformed businesses with complete Azure data infrastructure and real-time analytics.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge variant="secondary" className="mb-4">Featured Case Study</Badge>
                <CardTitle className="text-3xl mb-6">Hotel Ashirwad: Complete Azure Migration & Analytics</CardTitle>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Client Profile
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Hotel Ashirwad</strong> - A mid-size hospitality business in Pune with 
                      150+ rooms, multiple restaurant operations, and event management services. 
                      Growing 30% year-over-year with legacy on-premise systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-destructive">The Challenge</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• On-premise servers causing frequent downtime and high maintenance costs</li>
                      <li>• Manual booking reports taking 4-5 hours daily</li>
                      <li>• No real-time visibility into room occupancy, revenue, or guest satisfaction</li>
                      <li>• Separate systems for bookings, restaurant, events with no data integration</li>
                      <li>• Financial reporting delayed by 3-4 days, affecting cash flow decisions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Our End-to-End Solution</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• <strong>Cloud Migration:</strong> Complete Azure infrastructure setup with Data Lake Gen2</li>
                      <li>• <strong>ETL Pipelines:</strong> Azure Data Factory for automated data ingestion from PMS, POS systems</li>
                      <li>• <strong>Data Processing:</strong> Databricks with PySpark for nightly batch processing & real-time streaming</li>
                      <li>• <strong>Analytics:</strong> Power BI dashboards for bookings, revenue, guest metrics</li>
                      <li>• <strong>Monitoring:</strong> Azure Monitor with automated alerts for system health</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-light-bg rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">25%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Boost</div>
                    </div>
                    <div className="text-center p-4 bg-light-bg rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">90%</div>
                      <div className="text-sm text-muted-foreground">Report Time Saved</div>
                    </div>
                    <div className="text-center p-4 bg-light-bg rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
                      <div className="text-sm text-muted-foreground">Dashboard Updates</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 bg-light-bg">
                <img 
                  src={dataVisualizationImage} 
                  alt="Hotel Ashirwad Azure Infrastructure Dashboard" 
                  className="rounded-lg w-full mb-6"
                />
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "Datavolx transformed our entire operations. The migration to Azure eliminated 
                  our server headaches, and the real-time dashboards give us instant visibility 
                  into daily bookings, revenue trends, and guest experience metrics. The automated 
                  nightly pipelines save us hours every day."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold">
                  — Rajesh Sharma, General Manager, Hotel Ashirwad
                </cite>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              More Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-elegant">
              <div className="h-48 overflow-hidden">
                <img 
                  src={codeAnalyticsImage} 
                  alt="Sai Ganesh Tours Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <Badge variant="outline" className="w-fit mb-2">Travel & Tourism</Badge>
                  <CardTitle className="text-xl">Sai Ganesh Tours & Travels: Business Management Platform</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    Complete end-to-end business management app with trip scheduling, employee management, 
                    vehicle fuel logs, and financial dashboards.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <strong>Infrastructure:</strong> Azure App Service, Azure SQL Database, Power BI Embedded
                    </div>
                    <div className="text-sm">
                      <strong>ETL:</strong> Azure Data Factory pipelines for trip data, expense tracking
                    </div>
                    <div className="text-sm">
                      <strong>Analytics:</strong> Real-time trip visibility, automated expense reports
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-background rounded">
                      <div className="text-lg font-bold text-primary">40%</div>
                      <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded">
                      <div className="text-lg font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Trip Visibility</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-elegant">
              <div className="h-48 overflow-hidden">
                <img 
                  src={programmingDashboardImage} 
                  alt="Smart Factory Analytics Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <Badge variant="outline" className="w-fit mb-2">Manufacturing</Badge>
                  <CardTitle className="text-xl">Smart Factory IoT Analytics Platform</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    Real-time manufacturing analytics with IoT sensors, predictive maintenance, 
                    and production optimization using Azure IoT Hub.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <strong>Data Ingestion:</strong> Azure IoT Hub, Event Hubs for streaming sensor data
                    </div>
                    <div className="text-sm">
                      <strong>Processing:</strong> Azure Stream Analytics, Databricks for ML models
                    </div>
                    <div className="text-sm">
                      <strong>Storage:</strong> Time-series data in Azure Data Explorer
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-background rounded">
                      <div className="text-lg font-bold text-primary">35%</div>
                      <div className="text-xs text-muted-foreground">Downtime Reduction</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded">
                      <div className="text-lg font-bold text-primary">₹2M</div>
                      <div className="text-xs text-muted-foreground">Annual Savings</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-elegant">
              <div className="h-48 overflow-hidden">
                <img 
                  src={developerWorkspaceImage} 
                  alt="Multi-Channel Retail Analytics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <Badge variant="outline" className="w-fit mb-2">E-commerce</Badge>
                  <CardTitle className="text-xl">Multi-Channel Retail Analytics</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    Unified analytics platform integrating online sales, in-store POS, inventory, 
                    and customer data across multiple channels.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <strong>Integration:</strong> 15+ data sources via Azure Data Factory connectors
                    </div>
                    <div className="text-sm">
                      <strong>Processing:</strong> Delta Lake medallion architecture on Databricks
                    </div>
                    <div className="text-sm">
                      <strong>ML:</strong> Customer segmentation, demand forecasting with Azure ML
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-background rounded">
                      <div className="text-lg font-bold text-primary">22%</div>
                      <div className="text-xs text-muted-foreground">Revenue Increase</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded">
                      <div className="text-lg font-bold text-primary">50%</div>
                      <div className="text-xs text-muted-foreground">Inventory Optimization</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Consistent Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our data engineering solutions deliver measurable impact across different startup verticals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Average Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$25K</div>
              <div className="text-muted-foreground">Avg Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">14 Days</div>
              <div className="text-muted-foreground">Avg Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can transform your data challenges into competitive advantages.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Start Your Transformation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;