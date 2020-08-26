import React from 'react';
import { motion } from 'framer-motion';
import useFireStore from '../Firebase/useFireStore';

export default function ImageGrid({ setSelectedImage }) {
  const { docs } = useFireStore('images');

  return (
    <div className="img-grid">
      {docs && docs.map((doc) => (
        <motion.div
          className="img-wrap"
          key={doc.id}
          layout
          onClick={() => setSelectedImage(doc.url)}
        >
          <motion.img
            src={doc.url}
            alt={doc.url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
