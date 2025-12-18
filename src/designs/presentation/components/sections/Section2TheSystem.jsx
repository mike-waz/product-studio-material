import { useState } from 'react';
import Section from '../Section';
import Modal from '../Modal';
import { ProductInfrastructureDiagram } from '../diagrams';
import styles from './Sections.module.css';

export default function Section2TheSystem() {
  const [productHQModalOpen, setProductHQModalOpen] = useState(false);
  const [productStudioModalOpen, setProductStudioModalOpen] = useState(false);

  return (
    <Section id="the-system" sectionNumber="02" title="Agentic Product Infrastructure: Two Interconnected Systems" variant="wide" alt>
      <ProductInfrastructureDiagram
        onProductHQClick={() => setProductHQModalOpen(true)}
        onProductStudioClick={() => setProductStudioModalOpen(true)}
      />

      <div className={styles.highlight}>
        <p>
          A system that learns from every cycle—continuously improving over time.
        </p>
      </div>

      {/* Product HQ+ Modal */}
      <Modal
        isOpen={productHQModalOpen}
        onClose={() => setProductHQModalOpen(false)}
        title="Product HQ+"
      >
        <p>
          Product HQ+ would transform strategic planning and domain intelligence. Operating within
          our Confluence and Jira ecosystem, it would synthesize organizational knowledge, customer
          insights, and market intelligence to produce high-signal strategic inputs. This system
          would elevate PM capabilities in research, analysis, and strategic planning—the human-led
          exploration that defines product direction.
        </p>

        <h4>Key capabilities:</h4>
        <ul>
          <li>Domain knowledge synthesis across organizational documentation</li>
          <li>Strategic research and competitive analysis</li>
          <li>PRD template optimization and standardization</li>
          <li>Customer insight aggregation</li>
          <li>Market intelligence compilation</li>
        </ul>
      </Modal>

      {/* Product Studio Modal */}
      <Modal
        isOpen={productStudioModalOpen}
        onClose={() => setProductStudioModalOpen(false)}
        title="Product Studio"
      >
        <p>
          Product Studio would handle design execution at hypervelocity. Operating directly in our
          codebase, it would transform standardized PRDs into production-ready React components.
          Specialized quality mechanisms would ensure consistency across multiple dimensions—accessibility,
          coherence, brand voice, user experience, customer delight, market differentiation, and solution fit.
        </p>

        <h4>Key capabilities:</h4>
        <ul>
          <li>Automated UX/UI generation from structured inputs</li>
          <li>Real-time quality auditing across multiple dimensions</li>
          <li>Cross-product coherence enforcement</li>
          <li>Material Design system implementation</li>
          <li>Direct codebase integration for production output</li>
        </ul>
      </Modal>
    </Section>
  );
}
