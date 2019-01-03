# frozen_string_literal: true

class AbstractOperationFactory
  def initialize(operation_klass)
    @operation_klass = operation_klass
  end

  def create(params = {}, options = {})
    @result = @operation_klass.call(params: default_params.merge(params), **options)

    if @result.failure?
      messages = @result["contract.default"].errors.full_messages.join(", ")
      raise ArgumentError, "Fail #{self.class.name}: #{messages}"
    end

    model
  end

  def model
    return unless @result

    @result[:model]
  end

  private

    def default_params
      raise NotImplementedError
    end
end
