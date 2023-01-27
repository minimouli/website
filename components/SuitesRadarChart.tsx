/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { PureComponent } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import type { LightSuiteSynthesis } from '../types/LightSuiteSynthesis'

interface SuiteRadarChartProps {
    suites: LightSuiteSynthesis[]
}

class SuitesRadarChart extends PureComponent<SuiteRadarChartProps> {
    override render() {

        const data = this.props.suites.map((suite) => ({
            subject: suite.path.join(' / '),
            score: suite.score
        }))

        return (
            <ResponsiveContainer
                width="100%"
                height="100%"
                minWidth={200}
                minHeight={200}
            >
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={data}
                >
                    <PolarGrid
                        gridType="circle"
                        stroke="var(--stroke)"
                    />
                    <PolarAngleAxis
                        dataKey="subject"
                        fontSize={14}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                        domain={[0, 1]}
                    />
                    <Radar
                        dataKey="score"
                        stroke="var(--color-success)"
                        fill="var(--color-success)"
                        fillOpacity={0.2}
                        strokeWidth={3}
                        isAnimationActive={false}
                    />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

export {
    SuitesRadarChart
}
