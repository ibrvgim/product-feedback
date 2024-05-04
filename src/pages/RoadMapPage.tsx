import GoBack from '../components/common/GoBack';
import Section from '../components/common/Section';
import RoadMapContainer from '../components/pages/roadMapPage/RoadMapContainer';
import RoadMapHeader from '../components/pages/roadMapPage/RoadMapHeader';

function RoadMapPage() {
  return (
    <Section>
      <GoBack />
      <RoadMapHeader />
      <RoadMapContainer />
    </Section>
  );
}

export default RoadMapPage;
