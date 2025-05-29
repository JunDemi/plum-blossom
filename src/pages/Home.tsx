import { useQuery } from '@tanstack/react-query';
import { ApiCaller } from '../lib/api';
import type { IPlumGuild } from '../types/plum.interface';

const Home = () => {
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
    <section>
      {status === 'success' ? memberList.map((member) => <div key={member}>{member}</div>) : 'Loading...'}
    </section>
  );
};

export default Home;
