interface Project {
    id: string;
    year: number;
    project_code: string;
    name: string;
    project_type: string; // category of the project (1: Art and Media, 2: Education, 3: Technology, 4: Research)
    attribute: string; // ## ใน excel ยังไม่มี eg. Game, Art Toy, Design, etc.
    class: string; // ## ใน excel ยังไม่มี (A, B, C, D)
    chief_id: string; // ผูกกับ id หัวหน้าโครงการ
    chief_percent: number;
    sdate: number; 
    edate: number;
    status: boolean;
    create_date: number;
}   