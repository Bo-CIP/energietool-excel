/**
 * Sample for Bar series
 */
import * as React from "react";
import { useEffect } from 'react';
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, BarSeries, Category, Legend, Tooltip, ILoadedEventArgs, ChartTheme, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1: any[] = [
    { x: 'Japan', y: 1.71 }, { x: 'France', y: 1.82 },
    { x: 'India', y: 6.68 }, { x: 'Germany', y: 2.22 }, { x: 'Italy', y: 1.50 }, { x: 'Canada', y: 3.05 }
];
export let data2: any[] = [
    { x: 'Japan', y: 6.02 }, { x: 'France', y: 3.19 },
    { x: 'India', y: 3.28 }, { x: 'Germany', y: 4.56 }, { x: 'Italy', y: 2.40 }, { x: 'Canada', y: 2.04 }
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
/**
 * Bar sample
 */
const Bar = () => {

    const onChartLoad = (args: ILoadedEventArgs): void => {
        let chart: Element | null = document.getElementById('charts');
        if (chart) {
            chart.setAttribute('title', '');
        }
    };
    const load = (args: ILoadedEventArgs): void => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast') as ChartTheme;
    };
    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <div>
                    <ChartComponent id='charts' style={{ textAlign: "center" }} legendSettings={{ enableHighlight: true }} primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ labelFormat: '{value}%', title: 'GDP (In Percentage)', edgeLabelPlacement: 'Shift', majorTickLines: { width: 0 }, lineStyle: { width: 0 } }} chartArea={{ border: { width: 0 } }} load={load.bind(this)} width={Browser.isDevice ? '100%' : '75%'} title='GDP by Country in 2017' loaded={onChartLoad.bind(this)} tooltip={{ enable: true }}>
                        <Inject services={[BarSeries, DataLabel, Category, Legend, Tooltip, Highlight]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' type='Bar' columnSpacing={0.1} name='GDP' width={2} />
                            <SeriesDirective dataSource={data2} xName='x' yName='y' type='Bar' columnSpacing={0.1} name="Share in World's GDP" width={2} />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        </div>
    )    
}
export default Bar;