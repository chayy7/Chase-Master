"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "SDE-1 at Amazon",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    content: "ChaseMaster's roadmaps and interview prep resources helped me crack Amazon. The ATS resume builder is a game changer!",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Product Designer at Zomato",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    content: "Found my dream internship through the platform. The UI is gorgeous and the community is super helpful.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Frontend Engineer at Razorpay",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    content: "The curated resources saved me hundreds of hours. I didn't need to look anywhere else for my React journey.",
  },
];

export function SuccessStories() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/20 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students and professionals who accelerated their careers with ChaseMaster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="glass-card rounded-2xl p-8 relative shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-14 h-14 rounded-full border-2 border-primary/20 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{story.name}</h4>
                  <p className="text-sm text-primary">{story.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{story.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
