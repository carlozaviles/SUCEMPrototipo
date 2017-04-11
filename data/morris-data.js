$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            cargos: 4912,
            abonos: 1969,
            retiros: 2501
        }, {
            period: '2010 Q4',
            cargos: 3767,
            abonos: 3597,
            retiros: 5689
        }, {
            period: '2011 Q1',
            cargos: 6810,
            abonos: 1914,
            retiros: 2293
        }, {
            period: '2011 Q2',
            cargos: 5670,
            abonos: 4293,
            retiros: 1881
        }, {
            period: '2011 Q3',
            cargos: 4820,
            abonos: 3795,
            retiros: 1588
        }, {
            period: '2011 Q4',
            cargos: 15073,
            abonos: 5967,
            retiros: 5175
        }, {
            period: '2012 Q1',
            cargos: 10687,
            abonos: 4460,
            retiros: 2028
        }, {
            period: '2012 Q2',
            cargos: 8432,
            abonos: 5713,
            retiros: 1791
        }],
        xkey: 'period',
        ykeys: ['cargos', 'abonos', 'retiros'],
        labels: ['Cargos', 'Abonos', 'Retiros Cajero'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Estados",
            value: 50
        }, {
            label: "Ciudades",
            value: 30
        }, {
            label: "Divisas",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
