# frozen_string_literal: true

# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= "test"
require File.expand_path("../config/environment", __dir__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.in?(%w[production staging])
require "spec_helper"
require "rspec/rails"
# Add additional requires below this line. Rails is not loaded until this point!

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
#
# The following line is provided for convenience purposes. It has the downside
# of increasing the boot-up time by auto-requiring all files in the support
# directory. Alternatively, in the individual `*_spec.rb` files, manually
# require only the support files necessary.
#
Dir[
  Rails.root.join("spec/support/**/*.rb"),
  Rails.root.join("spec/factories/**/*.rb")
].each { |f| require f }

# Checks for pending migrations and applies them before tests are run.
# If you are not using ActiveRecord, you can remove these lines.
begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  puts e.to_s.strip
  exit 1
end
RSpec.configure do |config|
  config.include JsonHelpers
  config.include TimeFormatMatcher
  config.include ActiveSupport::Testing::TimeHelpers

  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = ::Rails.root.join("spec/fixtures")

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = false

  # setup shared context
  config.include_context "enable warden test mode", warden: true
  config.include_context "enable gaffe", gaffe: true
  config.include_context "disable bullet", bullet: false

  # RSpec Rails can automatically mix in different behaviours to your tests
  # based on their file location, for example enabling you to call `get` and
  # `post` in specs under `spec/controllers`.
  #
  # You can disable this behaviour by removing the line below, and instead
  # explicitly tag your specs with their type, e.g.:
  #
  #     RSpec.describe UsersController, :type => :controller do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://relishapp.com/rspec/rspec-rails/docs
  config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
  # arbitrary gems may also be filtered via:
  # config.filter_gems_from_backtrace("gem name")

  config.before :suite do
    DatabaseRewinder.clean_all
    # DatabaseRewinder.clean_with nil, except: %w()
  end

  config.before do |_example|
    ActionMailer::Base.deliveries.clear
  end

  config.after do |_example|
    DatabaseRewinder.clean
  end

  config.before do
    Bullet.start_request if Bullet.enable?
  end

  config.after do
    Bullet.end_request if Bullet.enable?
  end
end

RspecApiDocumentation.configure do |config|
  config.docs_dir = Rails.root.join("docs/api")
  config.keep_source_order = true
  config.post_body_formatter = :json
  config.api_name = "Resily API Documentation"

  # NOTE RspecApiDocumentation に `status` というメソッドがあるが、`parameter :status` を指定したい時に `let(:status)` を作ろうと
  # するためメソッド名が競合する。これを回避するために disable_dsl_status! を行うと `status` の代わりに `response_status` を
  # 使うようになる。
  config.disable_dsl_status!
end
