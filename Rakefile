namespace :scaffold do
  task :backbonejs do
    github_addr = "git@github.com:andyjamesdavies/project-scaffolding-with-rake.git"
    project_name = ENV['project']
    
    if project_name != nil
      this_dir = Dir.pwd
      dir_name = this_dir + '/' + project_name
     
      Dir.mkdir(dir_name)
      system("echo directory " + dir_name + " created")
      
      tmp_dir = dir_name + "/tmp"
      tmp2_dir = dir_name + "/tmp2"
      
      system("git clone " + github_addr + " " + tmp_dir)
      
      Dir.mkdir(tmp2_dir)
 
      system("git archive --remote=" + tmp_dir + " master | tar -x -C " + tmp2_dir)      
      
      system("cp -R " + tmp2_dir + "/templates/backbonejs/* " + dir_name)
      
      system("rm -rf " + tmp_dir + " " + tmp2_dir)
      
      libs_dir = dir_name + "/libs"
      Dir.mkdir(libs_dir)
      
      system("curl http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js > " + libs_dir +  "/jquery.min.js") 
      
      system("curl http://documentcloud.github.com/underscore/underscore-min.js > " + libs_dir + "/underscore.min.js")
      
      system("curl http://documentcloud.github.com/backbone/backbone-min.js > " + libs_dir + "/backbone.min.js")
      
      system("curl http://requirejs.org/docs/release/1.0.5/minified/require.js > " + libs_dir + "/require.min.js")
      
      system("curl http://requirejs.org/docs/release/1.0.5/minified/order.js > " + dir_name + "/assets/js/order.js")
      
      system("mv " + dir_name + " ../" + project_name);
      
    else 
      system("echo ERROR: you must provide a project name by adding project\=\{project_name\}")
    end
  end
end
  