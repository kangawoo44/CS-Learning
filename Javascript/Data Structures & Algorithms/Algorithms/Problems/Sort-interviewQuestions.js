//#1 - Sort 10 schools around your house by distance:
//small set of data to sort, so simplicity may beat out a more complex sort. Insertion sort

//#2 - eBay sorts listings by the current Bid amount:
//the current bid amount should always be sorted and new bids will come in. In this case insertion sort will perform best at O(n)
//radix or counting sort since it's a big data of numbers.

//#3 - Sport scores on ESPN
//if we're talking about sorting the team members by their scores in a game the answer is same as #1.
//quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//since we don't want to sort in-place (too much memory), merge sort would work well without the worst case scenario of quick sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//insertion sort.

//#6 - Temperature Records for the past 50 years in Canada
// quick sort

//#7 - Large user name database needs to be sorted. Data is very random.
// merge sort or quick sort

//#8 - You want to teach sorting for the first time
//bubble sort and selection sort