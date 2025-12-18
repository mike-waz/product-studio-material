import { useState } from 'react';
import Section from '../Section';
import ImageModal from '../ImageModal';
import styles from './Section6.module.css';
import pipelineImage from '../../assets/pipeline.jpg';

export default function Section6Appendix() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section
      id="appendix"
      sectionNumber="06"
      title="Appendix: WIP Pipeline"
    >
      <div className={styles.imageContainer}>
        <img
          src={pipelineImage}
          alt="WIP Pipeline diagram"
          className={styles.thumbnail}
          onClick={() => setIsModalOpen(true)}
        />
        <p className={styles.hint}>Click to expand</p>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={pipelineImage}
        imageAlt="WIP Pipeline diagram"
      />
    </Section>
  );
}
