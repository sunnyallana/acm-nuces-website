import { Achievements } from './Achievements';

export function AchievementSection(){
    const achievementProps = [
        {
          id : 1,
          count : 500,
          title : "Memebers",
          description : "Active Student Participants"
        },
        {
          id : 2,
          count : 20,
          title : "Competitions",
          description : "Organized annually"
        },
        {
          id : 3,
          count : 15,
          title : "Years",
          description : "Of Excellence"
        },
        {
          id : 4,
          count : 100,
          title : "Growth",
          description : "Year-over-year impact"
        }
      ]
    
      const achievementComponents = achievementProps.map((achievement) => { 
          return <Achievements 
            key={achievement.id}
            count={achievement.count}
            title={achievement.title}
            description={achievement.description}
          />
        })

    return(
        <section className='mt-10'>
            <h2 className='text-7xl text-[#006984] font-bold mb-5 ml-8'>Our Achievements</h2>
            <div className='flex justify-around gap-8 p-4 flex-wrap'>
                {achievementComponents}
            </div>
        </section>
    )
}