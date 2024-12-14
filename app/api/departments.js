export default function handler(req, res) {
    // const token = req.headers.authorization?.split(' ')[1];
  
    // if (!token || token !== 'your-valid-token') {
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }
  
    if (req.method === 'GET') {
      res.status(200).json([
        { id: 1, name: 'HR', subDepartments: ['Recruitment', 'Payroll'] },
        { id: 2, name: 'Engineering', subDepartments: ['Development', 'QA'] },
      ]);
    }
  }