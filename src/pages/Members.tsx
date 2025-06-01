import { useQuery } from '@tanstack/react-query';
import { ApiCaller } from '../lib/api';
import type { IPlumGuild } from '../types/plum.interface';
import PageSection from '../components/layout/PageSection';

const Members = () => {
  //useQuery
  const { data: guildData, status } = useQuery({
    queryKey: ['get', 'guild'],
    queryFn: async () =>
      ApiCaller<IPlumGuild>('/plum', {
        method: 'GET',
      }),
    refetchOnWindowFocus: false,
  });
  const memberList = guildData?.guild_member || [];

  return (
    <PageSection>
      {status === 'success'
        ? memberList.map((member) => (
            <div key={member} className=''>
              {member}
            </div>
          ))
        : 'Loading...'}
    </PageSection>
  );
};

export default Members;
