function solution(id_list, report, k) {
  const reportResult = report.reduce((a, c) => {
    const [user, reported] = c.split(' ');
    a[reported] = a[reported] ? a[reported].add(user) : new Set().add(user);
    return a;
  }, {});

  const mailed = Object.values(reportResult)
    .filter((set) => set.size >= k)
    .flatMap((set) => [...set]);
  return id_list.map((id) => mailed.filter((user) => user === id).length);
}
