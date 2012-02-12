namespace :scaffold do
  task :backbonejs do
    github_addr = "git@github.com:andyjamesdavies/project-scaffolding-with-rake.git"
    project_name = ENV['project']
    
    if project_name != nil
      this_dir = Dir.pwd
      dir_name = this_dir + '/' + project_name
     
      Dir.mkdir(dir_name)
      system("echo directory " + dir_name + " created")
      
      system("git clone " + github_addr + " " + dir_name + "/tmp")
      
      Dir.mkdir(dir_name + '/tmp2')
 
      system("git archive --remote=" + dir_name + "/tmp master | tar -x -C " + dir_name + "/tmp2")      
      system("rm -rf " + dir_name + "/tmp")
      
      system("cp -R " + dir_name + "/tmp2/templates/backbonejs/* " + dir_name)
    else 
      system("echo ERROR: you must provide a project name by adding project\=\{project_name\}")
    end
  end
end
  