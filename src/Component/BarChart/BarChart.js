import React from 'react'
import { Pie } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ['WrongQuestions %  ','CorrectQuestions %'],
          datasets: [
            {
              label: '# of votes',
              data: [10 , 19], //هاي لازم من الداتا بيز نجيبها 
              
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
      
          ],
        }}
       height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
       
          },
        
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

        
export default BarChart;