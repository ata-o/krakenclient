const util = require('../src/util');
const cutoffDate = '2022-01-01T00:00:00.000Z';

test('Should filter outages that exists in devices and start after cutoff date', () => {
    util.filter(outages, devices, cutoffDate, (data) => {
        let error: number = 0;
        data.forEach((element) => {
            if (new Date(element.begin) >= new Date(cutoffDate)) error++;
        });
        expect(error).toBe(0);
    });
});

let outages = [
    {
        id: 'be09e01e-0f10-4a15-9272-cb61d6ef5746',
        begin: '2021-11-08T01:34:44.510Z',
        end: '2021-12-24T19:23:04.636Z',
    },
    {
        id: 'be1a27a3-00a8-4239-81ae-73ddad6c31f1',
        begin: '2021-02-24T13:29:22.243Z',
        end: '2022-10-24T05:28:31.732Z',
    },
    {
        id: 'c17545e0-3fc8-45ed-9d54-82c3d1627261',
        begin: '2022-06-16T21:53:38.028Z',
        end: '2022-09-02T06:26:29.970Z',
    },
    {
        id: 'c35d3ff7-985f-4df6-874f-6ba31a4215cf',
        begin: '2021-02-09T13:27:33.673Z',
        end: '2021-09-13T15:43:38.278Z',
    },
    {
        id: 'c40e2e09-8267-46e1-aa58-6542d8ed0be7',
        begin: '2021-04-26T04:09:17.311Z',
        end: '2022-11-08T13:13:16.102Z',
    },
    {
        id: 'c587f3ec-adec-4e08-aa07-ac15c1d15879',
        begin: '2022-03-03T16:16:37.131Z',
        end: '2022-09-04T04:15:50.042Z',
    },
    {
        id: 'c63b6d9c-60cb-49c4-b15a-6eea5d1a2fc3',
        begin: '2022-02-22T07:16:40.737Z',
        end: '2022-07-30T00:54:32.614Z',
    },
    {
        id: 'cf553d43-0ac2-42e1-ac05-b79746d32dec',
        begin: '2021-06-30T07:43:53.935Z',
        end: '2022-01-12T01:55:04.521Z',
    },
    {
        id: 'd24b4a49-7de3-4c0a-9ac3-16a87f0483e9',
        begin: '2021-09-29T01:03:15.726Z',
        end: '2022-02-07T17:05:10.660Z',
    },
    {
        id: 'd3c1afa5-4160-48f2-bb93-3816978d015a',
        begin: '2022-12-16T15:44:33.594Z',
        end: '2022-12-20T21:45:09.421Z',
    },
    {
        id: 'd3e5aed8-5f11-4dd0-8701-eb1c3bce7525',
        begin: '2021-03-19T04:07:20.115Z',
        end: '2022-11-20T05:03:08.033Z',
    },
    {
        id: 'd6a24b97-d8cc-4bd2-abc6-707732db012a',
        begin: '2022-11-17T12:18:45.622Z',
        end: '2022-12-11T04:53:19.886Z',
    },
    {
        id: 'defb527b-da47-4e0b-ac8d-f473a875dd60',
        begin: '2022-07-28T20:55:14.279Z',
        end: '2022-11-26T12:21:46.985Z',
    },
    {
        id: 'e3232bb5-c032-4054-8063-0f30cc4bb3ad',
        begin: '2021-10-20T08:43:39.973Z',
        end: '2022-01-21T14:24:54.849Z',
    },
    {
        id: 'e5b0586b-f4b7-48c0-a7d4-0baf222dc3e8',
        begin: '2022-06-05T07:35:35.357Z',
        end: '2022-09-14T20:58:02.097Z',
    },
];

let devices = {
    id: 'test-id',
    name: 'test-site-name',
    devices: [
        { id: '111183e7-fb90-436b-9951-63392b36bdd2', name: 'Battery 1' },
        { id: '86b5c819-6a6c-4978-8c51-a2d810bb9318', name: 'Battery 2' },
        { id: '70656668-571e-49fa-be2e-099c67d136ab', name: 'Battery 3' },
        { id: '9ed11921-1c5b-40f4-be66-adb4e2f016bd', name: 'Battery 4' },
        { id: 'a79fe094-087b-4b1e-ae20-ac4bf7fa429b', name: 'Battery 5' },
        { id: '0e4d59ba-43c7-4451-a8ac-ca628bcde417', name: 'Battery 6' },
        { id: '20f6e664-f00e-4621-9ca4-5ec588aadeaf', name: 'Battery 7' },
        { id: '75e96db4-bba2-4035-8f43-df2cbd3da859', name: 'Battery 8' },
    ],
};
